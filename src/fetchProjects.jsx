import { useState, useEffect } from "react";
import { createClient } from "contentful";

const client = createClient({
  space: 'rf0op44d2k2s',
  environment: 'master',
  accessToken: 'JJHTsK70yuHGbtSOWZHZGN8urcs80B0Lh6041F40KR4',
});

export const useFetchProjects = () => {
  const [loading, setLoading] = useState(true)
  const [projects, setProjects] = useState([])

  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: 'projects' });
      const projects = response.items.map((item) => {
        const {title, url, image} = item.fields;
        const id = item.sys.id;
        const img = image?.fields?.file?.url;
        return {title, url, id, img};
      })
      setProjects(projects);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, []);
  return { loading, projects };
};