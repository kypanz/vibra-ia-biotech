export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://vibraiabiotech.com'
).replace(/\/+$/, '');

export const contactEmail =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'gerencia@grupoelivo.com';

const rawEhviUrl =
  process.env.NEXT_PUBLIC_EHVI_URL || 'https://ehvi.vercel.app/';

function toHttpsUrl(value: string): string | null {
  try {
    const url = new URL(value);
    return url.protocol === 'https:' ? url.toString() : null;
  } catch {
    return null;
  }
}

const ehviUrl = toHttpsUrl(rawEhviUrl);

export const ehvi = {
  enabled: process.env.NEXT_PUBLIC_EHVI_ENABLED !== 'false',
  url: ehviUrl,
  mode: process.env.NEXT_PUBLIC_EHVI_MODE || 'link',
} as const;

export const ehviHref = ehvi.enabled ? ehvi.url : null;

export function mailto(subject?: string, email = contactEmail): string {
  return subject
    ? `mailto:${email}?subject=${encodeURIComponent(subject)}`
    : `mailto:${email}`;
}
