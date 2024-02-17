import { ExclamationTriangleIcon } from '@radix-ui/react-icons';
import CardWrapper from './card-wrapper';

export function ErrorCard() {
  return (
    <CardWrapper
      headerLabel="Oops! Something went wrong!"
      backButtonHref="/auth/login"
      backButtonLabel="Back to Login"
    >
      <div className="w-full flex justify-center items-center">
        <ExclamationTriangleIcon
          className="text-destructive"
          width={30}
          height={30}
        />
      </div>
    </CardWrapper>
  );
}
