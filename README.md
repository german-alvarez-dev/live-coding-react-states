<img src="https://miro.medium.com/max/3150/1*NFwzjjur2atssvIlGia0AQ.jpeg" width="200" style="float:right">

# Trabajando con estados en React
Live coding Jun 2024 @ Ironhack Madrid

### Contenido
Ejemplos desarrollados por [Germán Álvarez](https://www.linkedin.com/in/german-alvarez-dev/) en [Ironhack Madrid](https://www.ironhack.com/es/desarrollo-web/madrid) durante el evento.

### Descarga de archivos
Descárgate los archivos haciendo click en el botón verde de la esquina superior izquierda (`Code`) y seleccionando `Download zip`

### Challenge
Te invito a resolver este reto, para el que no necesitas disponer de ningún software de código. Puedes enviármelo una vez lo finalices para optar a una beca del 25% en el Bootcamp de desarrollo web presencial de Julio de 2024.

Pasos:

- Regístrate en [Codesandbox](https://codesandbox.io), una plataforma web desde la que puedes desarrollar aplicaciones de React online.
---
- Una vez registrado/a, haz [click aquí](https://codesandbox.io/p/sandbox/react-new) para comenzar una nueva aplicación de React. Por defecto, deberías ver el componente `App.js` a la izquierda, y el resultado del código que retorna a la derecha. Encontrarás un `div`, un `h1` y un `h2` como parte del ejemplo inicial, que puedes ver a la derecha renderizados. Prueba a hacer cambios en el componente, verás cómo se actualiza automáticamente el resultado.
---
- Elimina todo el código del editor online y, en su lugar, pega este código para comenzar a trabajar en el reto. Comprueba cómo al interactuar con el botón, la alerta de ejemplo se muestra en tu navegador:
  ````jsx
  export default function App() {
    
    const incrementValue = () => {
      alert("Desde aquí debes manipular el estado");
    };
  
    return (
      <div className="App">
        <h1>Has hecho click 0 veces</h1>
        <p>Eso son pocas veces</p>
        <hr />
        <button onClick={incrementValue}>Hazme click</button>
      </div>
    );
  }
  ````
---
- Desarrolla un estado que recoja la cantidad de clicks que el usuario ha realizado sobre el botón, y muestre este número en la parte correspondiente del `h1`
---
- Haciendo uso de ese mismo estado, desarrolla la lógica necesaria para que, a partir de 5 clicks, el `p` que ahora muestra "Eso son pocas veces" pase a mostrar "Eso son muchas veces"
---
- ¿Recuerdas que podemos añadir a un botón la prop `disabled` con un valor boleano que lo bloquea y evita más clicks? Prueba añadiendo `disabled={true}` en el botón y después cámbialo a `disabled={false}` para experimentar esto. Bien, pues haciendo uso del estado que has desarrollado previamente, detecta cuando el usuario ha hecho 10 clicks y deshabilita entonces el botón para evitar que siga haciendo.

---

### Envíame tu challenge
Una vez hayas resuelto total o parcialmente este reto, puedes enviarme el enlace a tu CodeSandbox desde el botón superior `Share` que encontrarás ahí. Tal y como te indica la web, tendrás que marcarlo como "Público" antes. Puedes enviarme tu enlace a mi correo hasta el domingo 9 de junio inclusive. 

¡Gracias por asistir al evento!
