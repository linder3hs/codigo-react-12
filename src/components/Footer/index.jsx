export default function Footer(props) {
  const { celular, direccion, referencia, correo, linkedin } = props;
  
  return (
    <div>
      <h3>Footer</h3>
      <p>{celular} {correo}</p>
      <p>{direccion} {linkedin}</p>
      <p>{referencia}</p>
    </div>
  );
}
