import { getStandings, getCalendario, getClasificacionPichichi, getEquipos } from './api.js';

export default async function init() {
  console.log('Saludos desde la PEC2');
  const prepareStandings = getStandings();
  const prepareCalendario = getCalendario();
  const prepareClasificacionPichichi = getClasificacionPichichi();
  const prepareEquipos = getEquipos();
}
