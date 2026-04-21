export interface IAlert {
  priority: string;
  priorityStyle: string;
  title: string;
  subtitle: string;
  date: string;
  actionIcon: React.ReactNode;
}