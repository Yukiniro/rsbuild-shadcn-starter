import '@/styles/globals.css';
import { Button } from '@/components/ui/button';
import BadgeInfo from '@/assets/icons/badge-info.svg?react';

const App = () => {
  return (
    <div className="bg-blue-300 min-w-screen min-h-screen flex items-center justify-center flex-col text-white">
      <h1 className="text-4xl font-bold">Rsbuild with React</h1>
      <p className="text-2xl font-bold mb-4">Start building amazing things with Rsbuild.</p>
      <Button>
        <BadgeInfo />
        Click me
      </Button>
    </div>
  );
};

export default App;
