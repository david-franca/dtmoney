import { Container } from "./styles";

export const TransactionsTable = () => {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento</td>
            <td className="deposit">RS12.000,00</td>
            <td>Site</td>
            <td>12/05/2022</td>
          </tr>
          <tr>
            <td>Academia</td>
            <td className="withdraw">- RS89,00</td>
            <td>Saúde</td>
            <td>04/05/2022</td>
          </tr>
          <tr>
            <td>Internet</td>
            <td className="withdraw">- RS75,90</td>
            <td>Contas</td>
            <td>10/05/2022</td>
          </tr>
          <tr>
            <td>G-Trace</td>
            <td className="deposit">RS394,87</td>
            <td>Site</td>
            <td>11/05/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
};
