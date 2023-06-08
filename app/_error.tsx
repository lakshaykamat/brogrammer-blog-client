import { NextPageContext } from 'next';

interface ErrorProps {
  statusCode?: number;
  message?: string;
}

const ErrorPage = ({ statusCode, message }:ErrorProps) => {
  return (
    <div>
      <h1>Error {statusCode}</h1>
      <p>{message}</p>
    </div>
  );
};

ErrorPage.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  const message = err?.message || 'An error occurred';

  return { statusCode, message };
};

export default ErrorPage;
