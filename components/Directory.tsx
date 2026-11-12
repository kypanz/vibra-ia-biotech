'use client';

import { useMemo, useRef, useState } from 'react';
import { Arrow } from './Arrow';
import { useDirectory } from './EhviClientShell';
import type { Area } from '@/lib/content';

type DirectoryProps = {
  areas: Area[];
  areaNames: string[];
  groupNames: string[];
  allLabel: string;
  resultsLabel: string;
  emptyLabel: string;
  resetLabel: string;
  searchLabel: string;
  placeholder: string;
  filterLabel: string;
};

function normalize(value: string): string {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
}

export function Directory({
  areas,
  areaNames,
  groupNames,
  allLabel,
  resultsLabel,
  emptyLabel,
  resetLabel,
  searchLabel,
  placeholder,
  filterLabel,
}: DirectoryProps) {
  const { openArea } = useDirectory();
  const [query, setQuery] = useState('');
  const [group, setGroup] = useState('all');
  const searchRef = useRef<HTMLInputElement>(null);

  const normalizedQuery = normalize(query);
  const visible = useMemo(
    () =>
      areas.map((area, index) => ({
        area,
        index,
        visible:
          (group === 'all' || String(area[0]) === group) &&
          normalize(`${area[1]} ${area[2]}`).includes(normalizedQuery),
      })),
    [areas, group, normalizedQuery]
  );
  const count = visible.filter((item) => item.visible).length;

  const reset = () => {
    setQuery('');
    setGroup('all');
    searchRef.current?.focus();
  };

  return (
    <>
      <div className="search-row">
        <label className="search-box">
          <span aria-hidden="true">⌕</span>
          <span className="sr-only">{searchLabel}</span>
          <input
            ref={searchRef}
            type="search"
            id="area-search"
            placeholder={placeholder}
            autoComplete="off"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </label>
        <button className="reset-search" id="reset-search" onClick={reset}>
          {resetLabel}
        </button>
      </div>
      <div className="filters" role="group" aria-label={filterLabel}>
        <button
          data-group="all"
          aria-pressed={group === 'all'}
          onClick={() => setGroup('all')}
        >
          {allLabel}
        </button>
        {groupNames.map((name, index) => (
          <button
            key={name}
            data-group={index}
            aria-pressed={group === String(index)}
            onClick={() => setGroup(String(index))}
          >
            {name}
          </button>
        ))}
      </div>
      <p className="results-count" role="status" aria-live="polite">
        <span id="result-count">{count}</span> {resultsLabel}
      </p>
      <div className="areas-grid">
        {visible.map(({ area, index, visible: isVisible }) => (
          <button
            className="area-card"
            data-area={index}
            data-group-id={area[0]}
            data-search={`${area[1]} ${area[2]}`}
            key={`${area[1]}-${area[2]}`}
            hidden={!isVisible}
            onClick={() => openArea(index)}
          >
            <span className="area-group">{groupNames[area[0]]}</span>
            <strong>{areaNames[index]}</strong>
            <Arrow />
          </button>
        ))}
      </div>
      <p id="no-results" className="no-results" hidden={count !== 0}>
        {emptyLabel}
      </p>
    </>
  );
}
