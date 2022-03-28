import { Box, SimpleGrid } from "@chakra-ui/layout";
import React from "react";
import MemberCard from "../components/MemberCard";

function Team() {
  let data = [
    {
      name: "Fouad Herradi",
      role: "Gérant et Ingénieur EMI",
      departement: "Génie Civil",
      image: "/randomuser.jpg",
    },
    {
      name: "Salah CHAFOUI",
      role: "Ingénieur génie civil",
      departement: "Génie Civil",
      image: "/randomuser.jpg",
    },
    {
      name: "Fouad ELMESKINI",
      role: "Projeteur Technicien bâtiment",
      departement: "Génie Civil",
      image: "/randomuser.jpg",
    },
    {
      name: "Mounia LAMRAHI",
      role: "Dessinatrice",
      departement: "Génie Civil",
      image: "/randomuser.jpg",
    },
    {
      name: "Oussama BADANI",
      role: "Métreur",
      departement: "Génie Civil",
      image: "/randomuser.jpg",
    },
    {
      name: "Ghizlane HAYANI MOUNIR",
      role: "Ingénieur en génie énergétique",
      departement: "Département des lots techniques et Energétiques",
      image: "/randomuser.jpg",
    },
    {
      name: "Anas EL BAHICHI",
      role: "Licencié en Electronique",
      departement: "Département des lots techniques et Energétiques",
      image: "/randomuser.jpg",
    },
    {
      name: "Soumia ADLI",
      role: "Technicienne en Electricité de Maintenance Industrielle",
      departement: "Département des lots techniques et Energétiques",
      image: "/randomuser.jpg",
    },
    {
      name: "Nora BENALLA",
      role: "Chargée d’expertises auprès des tribunaux",
      departement: "Département Expertises",
      image: "/randomuser.jpg",
    },
  ];

  return (
    <Box>
      <SimpleGrid columns={[1, 3]}>
        {data.map((employee) => (
          <MemberCard employee={employee} />
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default Team;
