export default function formatDate(isoString:string){
  const date = new Date(isoString);
  
  // Ajusta para o fuso horário local (-03:00)
  const offset = date.getTimezoneOffset(); // Em minutos
  date.setMinutes(date.getMinutes() - offset); // Ajusta para o fuso local

  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Meses começam em 0
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
};