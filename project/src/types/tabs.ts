export type TabsProps = {
  tabs: Tab[];
  renderTabContent?: (tabText: string) => JSX.Element | undefined;
};

export type Tab = {
  id: number;
  text: string;
};
