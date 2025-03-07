"use client";

import { SelectInput, useField } from "@payloadcms/ui";
import { useEffect, useState } from "react";

const CompanyLabel = ({ path }: { path: string }) => {
  const { value, setValue } = useField<any>({ path });

  const [companies, setCompanies] = useState<any>([]);

  const fetchCompanies = async () => {
    try {
      const response = await fetch("/api/companies");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching companies:", error);
      return [];
    }
  };

  useEffect(() => {
    fetchCompanies().then((data) => setCompanies(data));
  }, []);

  return (
    <div style={{ marginBottom: 8 }}>
      <p style={{ fontSize: 14, marginBottom: 4 }}>Empresa</p>
      <SelectInput
        path={path}
        name={path}
        value={value}
        onChange={(e) => setValue(e.values)}
        options={companies?.docs?.map((company: any) => ({
          label: company.name,
          value: company.id,
        }))}
      />
    </div>
  );
};

export default CompanyLabel;
