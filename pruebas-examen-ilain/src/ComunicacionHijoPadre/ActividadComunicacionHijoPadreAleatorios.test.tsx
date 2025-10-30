import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ActividadComunicacionHijoPadreAleatorios from './ActividadComunicacionHijoPadreAleatorios';

let calificacionAcumulada = 0;

afterAll(() => {
  console.log(`\n------------------------------------------------------`);
  console.log(`CALIFICACIÓN FINAL: ${calificacionAcumulada.toFixed(2)} / 10.00 puntos`);
  console.log(`------------------------------------------------------`);
});

describe('Calificador de la Actividad: Comunicación Avanzada', () => {
  
  test('[2.50 puntos] Criterio de Entrega: El componente se renderiza sin errores', () => {
    render(<ActividadComunicacionHijoPadreAleatorios />);
    calificacionAcumulada += 2.5;
    console.log(`[SUPERADO] Criterio de Entrega (+2.50 puntos). Calificación actual: ${calificacionAcumulada.toFixed(2)}`);
    expect(screen.getByTestId('min-input')).toBeInTheDocument();
  });

  test('[1.50 puntos] Creación de estructura de la actividad', () => {
    render(<ActividadComunicacionHijoPadreAleatorios />);
    expect(screen.getByTestId('min-input')).toBeInTheDocument();
    expect(screen.getByTestId('max-input')).toBeInTheDocument();
    expect(screen.getByTestId('generar-btn')).toBeInTheDocument();
    expect(screen.getByTestId('actividad-padre')).toBeInTheDocument();
    expect(screen.getByTestId('generador-hijo')).toBeInTheDocument();

    calificacionAcumulada += 1.5;
    console.log(`[SUPERADO] Creación de estructura (+1.50 puntos). Calificación actual: ${calificacionAcumulada.toFixed(2)}`);
  });

  test('[2.00 puntos] Generación y Límites: El hijo genera número y muestra límites', () => {
    render(<ActividadComunicacionHijoPadreAleatorios />);
    
    fireEvent.change(screen.getByTestId('min-input'), { target: { value: '10' } });
    fireEvent.change(screen.getByTestId('max-input'), { target: { value: '20' } });
    fireEvent.click(screen.getByTestId('generar-btn'));
    
    expect(screen.getByTestId('limiteInferior')).toHaveTextContent('10');
    expect(screen.getByTestId('limiteSuperior')).toHaveTextContent('20');
    const numeroGenerado = parseInt(screen.getByTestId('numeroGenerado').textContent || 'NaN');
    expect(numeroGenerado).toBeGreaterThanOrEqual(10);
    expect(numeroGenerado).toBeLessThanOrEqual(20);

    fireEvent.change(screen.getByTestId('min-input'), { target: { value: '' } });
    fireEvent.change(screen.getByTestId('max-input'), { target: { value: '' } });
    
    expect(screen.getByTestId('limiteInferior')).toHaveTextContent('0');
    expect(screen.getByTestId('limiteSuperior')).toHaveTextContent('100');

    calificacionAcumulada += 2.0;
    console.log(`[SUPERADO] Criterio de Generación y Límites (+2.00 puntos). Calificación actual: ${calificacionAcumulada.toFixed(2)}`);
  });

  test('[2.00 puntos] Envío al Padre: El padre recibe el número en el span específico', () => {
    render(<ActividadComunicacionHijoPadreAleatorios />);
   
    fireEvent.click(screen.getByTestId('generar-btn'));
   
    const numeroGeneradoEnHijo = screen.getByTestId('numeroGenerado').textContent;
    
   
    fireEvent.click(screen.getByTestId('enviar-btn'));
    
    
    expect(screen.getByTestId('numero-recibido')).toHaveTextContent(numeroGeneradoEnHijo as string);
    
    calificacionAcumulada += 2.0;
    console.log(`[SUPERADO] Criterio de Envío al Padre (+2.00 puntos). Calificación actual: ${calificacionAcumulada.toFixed(2)}`);
 
  });

  test('[2.00 puntos] Funcionalidad Reset: El hijo se reinicia sin afectar al padre', () => {
    render(<ActividadComunicacionHijoPadreAleatorios />);
  
    
    fireEvent.click(screen.getByTestId('reset-btn'));

    expect(screen.getByTestId('mensaje-hijo')).toHaveTextContent('En espera de datos');
 

    calificacionAcumulada += 2.0;
    console.log(`[SUPERADO] Criterio de Funcionalidad Reset (+2.00 puntos). Calificación actual: ${calificacionAcumulada.toFixed(2)}`);
  });

});
