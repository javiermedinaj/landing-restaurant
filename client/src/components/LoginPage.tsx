import LoginForm from './LoginForm';

interface LoginPageProps {
  onLogin: (token: string) => void;
}

const LoginPage = ({ onLogin }: LoginPageProps) => {
  return (
    <div className="flex-grow">
      <LoginForm onLogin={onLogin} />
    </div>
  );
};

export default LoginPage;