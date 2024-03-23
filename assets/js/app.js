const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('#name');
// Le agregue un punto al atributo name ya que es parecida al atributo que contiene #blog en la parte del HTML
const $b = document.querySelector('#blog');
const $l = document.querySelector('.location');

async function displayUser(username) {
  // async pertenece a una función asíncrona con la cual podemos devolver un objeto 
  $n.textContent = 'cargando...';
  try {
  const response = await fetch(`${usersEndpoint}/${username}`);
  const data = await response.json();
  // Aqui se utiliza la variable data para convertir lo que se a buscado con fetch  y asi transformarlo en un paquete de tipo JSON
  console.log(data);
  $n.textContent = '${data.name}';
  $b.textContent = '${data.blog}';
  $l.textContent = '${data.location}';
  } catch (err) {
    handleError(err);
  };
};
// Segun la documentación: La declaración try...catch señala un bloque de instrucciones a intentar (try), y especifica una respuesta si se produce una excepción (catch).
/**
 * 
 * try {
  nonExistentFunction();
} catch (error) {
  console.error(error);
  // Expected output: ReferenceError: nonExistentFunction is not defined
  // (Note: the exact output may be browser-dependent)
}
 */

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`;
  // Al ser una función, se necesita agregar el simbolo $ para poder mandar a llamar los datos dentro de la función  asi como en la linea 10 
  // y falta el punto y coma
};

displayUser('stolinski').catch(handleError);