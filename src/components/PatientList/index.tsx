import { Patient } from "../../interfaces/patient";
import PatientCard from "../PatientCard";

const PatientList = () => {
  const patients: Patient[] = [
    {
      name: "Mrs. Michelle Kassulke",
      id: 1,
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/46.jpg",
      details: [
        {
          label: "Created At",
          value: "2021-09-01",
        },
        {
          label: "Description",
          value:
            "Illo eos aliquid dignissimos beatae. Quam quisquam porro sint suscipit vel magni accusamus harum. Nulla dicta excepturi fuga dignissimos quidem in dolore. Dolor omnis numquam ea sint culpa laboriosam assumenda.\nQuo officia fuga. Id repellat quidem illum adipisci maiores perspiciatis dignissimos. Quaerat molestiae possimus. Iusto facere vel cupiditate quae optio mollitia. Ratione officiis reprehenderit tempore labore quis quas quam ipsa. Magni ipsam ducimus facilis nesciunt.\nVoluptates minima odit. Iusto officiis placeat dicta alias soluta facere. Error iusto blanditiis aliquid ex nesciunt dolores quod esse impedit. Numquam similique iste hic maxime alias iste itaque. Quis consectetur nemo. Omnis accusantium alias quasi.",
        },
        {
          label: "Website",
          value: "http://sneaky-lie.biz",
        },
      ],
    },
    {
      name: "Elvira Botsford",
      id: 2,
      avatar:
        "https://ipfs.io/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/219.jpg",
      details: [
        {
          label: "Created At",
          value: "2021-09-01",
        },
        {
          label: "Description",
          value:
            "Illo eos aliquid dignissimos beatae. Quam quisquam porro sint suscipit vel magni accusamus harum. Nulla dicta excepturi fuga dignissimos quidem in dolore. Dolor omnis numquam ea sint culpa laboriosam assumenda.\nQuo officia fuga. Id repellat quidem illum adipisci maiores perspiciatis dignissimos. Quaerat molestiae possimus. Iusto facere vel cupiditate quae optio mollitia. Ratione officiis reprehenderit tempore labore quis quas quam ipsa. Magni ipsam ducimus facilis nesciunt.\nVoluptates minima odit. Iusto officiis placeat dicta alias soluta facere. Error iusto blanditiis aliquid ex nesciunt dolores quod esse impedit. Numquam similique iste hic maxime alias iste itaque. Quis consectetur nemo. Omnis accusantium alias quasi.",
        },
        {
          label: "Website",
          value: "http://sneaky-lie.biz",
        },
      ],
    },
  ];
  return (
    <div>
      {patients.map((patient) => (
        <PatientCard key={patient.id} patient={patient} />
      ))}
    </div>
  );
};

export default PatientList;
