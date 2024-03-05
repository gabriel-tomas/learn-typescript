type Documento = {
  titulo: string;
  texto: string;
  data?: Date;
};

const documento: Documento = {
  titulo: 'O titulo',
  texto: 'O conteúdo',
  data: new Date(),
};

console.log(documento.data?.toDateString() ?? 'Data não encontrada');
