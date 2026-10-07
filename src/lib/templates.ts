import data from '../data/templates.json';

export interface TemplateRoom {
  name: string;
  widthCm: number;
  depthCm: number;
  areaM2: number;
  outdoor: boolean;
}

export interface Template {
  id: string;
  name: string;
  category: string;
  description: string;
  widthCm: number;
  depthCm: number;
  areaM2: number;
  bedrooms: number;
  bathrooms: number;
  rooms: TemplateRoom[];
  furnitureCount: number;
  features: string[];
}

export const templates = data.templates as Template[];

const APP_URL = 'https://app.buildmy.house';

export const openUrl = (id: string) => `${APP_URL}/?template=${encodeURIComponent(id)}`;

const metres = (cm: number) => (cm / 100).toFixed(1);
const feet = (cm: number) => (cm / 30.48).toFixed(1);

/** "4.1 × 4.7 m (13.3 × 15.3 ft)" */
export function dimensions(widthCm: number, depthCm: number): string {
  return `${metres(widthCm)} × ${metres(depthCm)} m (${feet(widthCm)} × ${feet(depthCm)} ft)`;
}

export const sqFt = (m2: number) => Math.round(m2 * 10.764);

export function bedBath(t: Template): string {
  const beds = t.bedrooms === 0 ? 'No bedroom' : `${t.bedrooms} bedroom${t.bedrooms === 1 ? '' : 's'}`;
  const baths = t.bathrooms === 0 ? 'no bath' : `${t.bathrooms} bath${t.bathrooms === 1 ? '' : 's'}`;
  return `${beds}, ${baths}`;
}
