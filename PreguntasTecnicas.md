# Preguntas técnicas:

- ¿Has aplicado los principios SOLID?
  - Hasta ahora no he tenido la oportunidad de hacerlo
- ¿Cuánto tiempo has estado pensando y escribiendo tests del código? Si
  hubieras tenido mucho más tiempo... ¿qué habrías añadido? Si no has
  realizado tests, ¿qué herramientas habrías utilizado para llevarlos a cabo? - El tiempo estricto de programación es de aproximadamente 6 hrs, con alrededor de 2 hrs de planeación y 4 de investigación. De haber tenido más tiempo habría completado el requerimiento del filtro, dado que actualmente realiza el filtrado de los resultados, pero estos sólo se ven reflejados en la paginación, mas no en los elementos mostrados. También habría modularizado más los componentes, agregado un diseño más usable y visualmente más atractivo, y perfeccionado cuestiones de performance en el desarrollo. En cuestión de pruebas habría usado Jest.
- ¿Cómo mejorarías la API que has usado?
  - Cambiaría las imágenes, puesto que varían de tamaño y no son muy agradables visualmente, además de que algunos objetos no tienen imágenes registradas, y la proporción de las mismas dificulta su implementación en una buena UI.
- ¿Crees que esta API soporta peticiones CORS? ¿Cómo has llegado a esa
  conclusión? - Sí lo creo, puesto que puedo obtener la data desde cualquier dominio sin restricción, además de que no es necesario estar registrado para hacerlo. Además la misma documentación indica que las peticiones CORS estan habilitadas.
- ¿Cómo rastrearías un problema de rendimiento en producción? ¿Alguna
  vez has tenido que hacerlo? - Si lo he hecho, usualmente con la herramienta LightHouse de google.
- Descríbete a ti mismo en formato JSON

```
{
    "name":"Israel",
    "lastname":"Salinas Martínez",
    "age":33,
    "phone":"+525543788096",
    "email":"israel.salinas.m@gmail.com",
    "nationality":"Mexican",
    "role":"Front-End Developer",
    "hobbies":[
        "Chess",
        "Read",
        "HandCrafting",
        "Painting",
        "Music"
    ],
    "favourite_food":[
        "Mexican food",
        "Sushi",
        "Cheese Cake"
    ]
}
```
