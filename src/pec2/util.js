import Clasificacion from './Classes/Clasificacion.js';
import Calendario from './Classes/Calendario.js';
import Pichichi from './Classes/Pichichi.js';
import Equipos from './Classes/Equipos.js';

export function prepareStandings(datos_api) {
  const standings = new Clasificacion(datos_api);
  standings.mostrarClasificacion();
}

export function prepareCalendario(datos_api) {
  const calendario = new Calendario(datos_api);
  calendario.mostrarCalendario();
}

export function prepareClasificacionPichichi(datos_api) {
  const pichichis = new Pichichi(datos_api);
  pichichis.mostrarClasificacionPichichi();
}
export function prepareEquipos(datos_api) {
  const equipos = new Equipos(datos_api);
  equipos.mostrarEquipos();
}
