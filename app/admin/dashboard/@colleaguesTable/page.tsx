import ColleaguesTableComp, {
  ColleagueDataProps,
} from "@/components/admin/ColleaguesTable";

export default function ColleaguesTable() {
  const demoData: ColleagueDataProps[] = [
    {
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      earning: 50000,
      date: new Date("2023-01-15"),
      rating: 4.5,
      noOfProduct: 120,
      avatar: "https://example.com/avatars/alice.jpg",
    },
    {
      name: "Bob Smith",
      email: "bob.smith@example.com",
      earning: 62000,
      date: new Date("2023-02-10"),
      rating: 4.8,
      noOfProduct: 150,
      avatar: "https://example.com/avatars/bob.jpg",
    },
    {
      name: "Catherine Lee",
      email: "catherine.lee@example.com",
      earning: 55000,
      date: new Date("2023-03-05"),
      rating: 4.2,
      noOfProduct: 110,
      avatar: "https://example.com/avatars/catherine.jpg",
    },
    {
      name: "David Brown",
      email: "david.brown@example.com",
      earning: 58000,
      date: new Date("2023-04-20"),
      rating: 4.6,
      noOfProduct: 130,
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    },
    {
      name: "Emma Wilson",
      email: "emma.wilson@example.com",
      earning: 63000,
      date: new Date("2023-05-15"),
      rating: 4.9,
      noOfProduct: 160,
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    },
  ];

  return <ColleaguesTableComp colleaguesData={demoData} />;
}
