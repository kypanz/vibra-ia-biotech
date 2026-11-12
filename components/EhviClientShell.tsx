'use client';

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type MouseEvent,
  type ReactNode,
} from 'react';
import { Arrow } from './Arrow';

type DirectoryContextValue = {
  openArea: (id: number) => void;
};

const DirectoryContext = createContext<DirectoryContextValue | null>(null);

export function useDirectory(): DirectoryContextValue {
  const value = useContext(DirectoryContext);
  if (!value) {
    throw new Error('Directory context is missing');
  }
  return value;
}

type EhviClientShellProps = {
  children: ReactNode;
  areaNames: string[];
  areaText: string;
  areaAdult: string;
  areaLimits: string;
  areaPending: string;
  closeLabel: string;
  aboutArea: string;
  openSpace: string;
  ehviHref: string | null;
};

export function EhviClientShell({
  children,
  areaNames,
  areaText,
  areaAdult,
  areaLimits,
  areaPending,
  closeLabel,
  aboutArea,
  openSpace,
  ehviHref,
}: EhviClientShellProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (selectedId !== null && !dialog.open) {
      dialog.showModal();
    }
  }, [selectedId]);

  const close = () => {
    dialogRef.current?.close();
    setSelectedId(null);
  };

  const handleDialogClick = (event: MouseEvent<HTMLDialogElement>) => {
    const dialog = dialogRef.current;
    if (!dialog || event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (
      event.clientX < rect.left ||
      event.clientX > rect.right ||
      event.clientY < rect.top ||
      event.clientY > rect.bottom
    ) {
      close();
    }
  };

  const selectedName = selectedId !== null ? areaNames[selectedId] : '';

  return (
    <DirectoryContext.Provider value={{ openArea: setSelectedId }}>
      {children}
      <dialog
        ref={dialogRef}
        id="area-dialog"
        aria-labelledby="dialog-title"
        onClick={handleDialogClick}
        onClose={() => setSelectedId(null)}
      >
        <button className="dialog-close" aria-label={closeLabel} onClick={close}>
          ×
        </button>
        <p className="eyebrow">EHVI / {aboutArea}</p>
        <h2 id="dialog-title">{selectedName}</h2>
        <p id="dialog-text">
          {selectedId !== null
            ? areaText.replace('{area}', selectedName.toLowerCase())
            : ''}
        </p>
        <p id="dialog-adult" hidden={selectedId !== 42}>{areaAdult}</p>
        <div className="dialog-notice">{areaLimits}</div>
        <p className="dialog-pending">
          <span className="status-dot"></span>
          {areaPending}
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 10 }}>
          {ehviHref ? (
            <a
              className="button lime"
              href={ehviHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              {openSpace} <Arrow />
            </a>
          ) : null}
          <button
            className="button dark dialog-dismiss"
            style={{ marginTop: 0 }}
            onClick={close}
          >
            {closeLabel}
          </button>
        </div>
      </dialog>
    </DirectoryContext.Provider>
  );
}
