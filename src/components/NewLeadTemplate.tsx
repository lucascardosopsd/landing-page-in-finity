type NewLeadTemplateProps = {
  name: string;
  email: string;
  target: string;
};

export const NewLeadTemplate = ({
  name,
  email,
  target,
}: NewLeadTemplateProps) => (
  <div>
    <h1>Você tem um novo Lead!</h1>
    <p>Nome: {name}</p>
    <p>Objetivo: {target}</p>
    <p>Email: {email}</p>
  </div>
);
