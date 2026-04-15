import { Loader2 } from 'lucide-react';

const ButtonLoader = ({ className = "" }: { className?: string }) => {
    return <Loader2 className={`h-5 w-5 animate-spin ${className}`} />;
};

export default ButtonLoader;
