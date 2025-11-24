import { toast } from 'sonner';

export class Toaster {
  public static error(message: string, details?: string[]): void {
    const description =
      details && details.length > 0 ? details.join('\n') : undefined;

    void toast.error(message, {
      description,
      duration: 4000,
    });
  }

  public static success(message: string, description?: string): void {
    void toast.success(message, {
      description,
      duration: 3000,
    });
  }

  public static info(message: string, description?: string): void {
    void toast.info(message, {
      description,
      duration: 3000,
    });
  }

  public static warning(message: string, description?: string): void {
    void toast.warning(message, {
      description,
      duration: 3000,
    });
  }
}
