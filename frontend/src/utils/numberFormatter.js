/**
 * Utilidades para formatear números de manera consistente
 * Evita que se muestren números en árabe u otros sistemas numéricos no deseados
 */

/**
 * Formatea un número como porcentaje usando el locale español
 * @param {number} value - El valor numérico a formatear (ej: 0.85 para 85%)
 * @param {object} options - Opciones adicionales para el formateo
 * @returns {string} - Número formateado como porcentaje
 */
export const formatPercentage = (value, options = {}) => {
  const defaultOptions = { style: 'percent' };
  return Number(value).toLocaleString('es-ES', { ...defaultOptions, ...options });
};

/**
 * Formatea un número usando el locale español
 * @param {number} value - El valor numérico a formatear
 * @param {object} options - Opciones para el formateo
 * @returns {string} - Número formateado
 */
export const formatNumber = (value, options = {}) => {
  return Number(value).toLocaleString('es-ES', options);
};

/**
 * Formatea una fecha usando el locale español
 * @param {Date|string} date - La fecha a formatear
 * @param {object} options - Opciones para el formateo de fecha
 * @returns {string} - Fecha formateada
 */
export const formatDate = (date, options = {}) => {
  const dateObj = new Date(date);
  return dateObj.toLocaleString('es-ES', options);
};

/**
 * Formatea un número como moneda usando el locale español
 * @param {number} value - El valor numérico a formatear
 * @param {string} currency - La moneda a usar (por defecto 'EUR')
 * @param {object} options - Opciones adicionales para el formateo
 * @returns {string} - Número formateado como moneda
 */
export const formatCurrency = (value, currency = 'EUR', options = {}) => {
  const defaultOptions = { style: 'currency', currency };
  return Number(value).toLocaleString('es-ES', { ...defaultOptions, ...options });
};

/**
 * Formatea un número como moneda brasileña (BRL) usando el locale portugués brasileño
 * @param {number} value - El valor numérico a formatear
 * @param {object} options - Opciones adicionales para el formateo
 * @returns {string} - Número formateado como moneda brasileña
 */
export const formatCurrencyBRL = (value, options = {}) => {
  const defaultOptions = { style: 'currency', currency: 'BRL' };
  return Number(value).toLocaleString('pt-BR', { ...defaultOptions, ...options });
};

/**
 * Formatea un número para mostrar siempre dígitos occidentales (0123456789)
 * independientemente del locale configurado en el navegador
 * @param {number|string} value - El valor numérico a formatear
 * @returns {string} - Número con dígitos occidentales
 */
export const formatWesternNumber = (value) => {
  if (value === null || value === undefined) return '0';
  return Number(value).toLocaleString('en-US');
};
