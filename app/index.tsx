import { StatusBar } from 'react-native';
import Dashboard from '../src/screens/dashboard';

export default function App() {
  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <Dashboard />
    </>
  );
}
