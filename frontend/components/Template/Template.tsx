import { CSSProperties, useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listTemplates } from "../../graphql/queries";
import TemplateItem from "../../ui-components/TemplateItem";
import Layout from "../NavBar/NavBar";
import styles from "./Template.module.css";
import { Storage } from "aws-amplify";

interface Template {
  id: string;
  name: string;
  template_image: string;
}

interface ListTemplatesResult {
  data: {
    listTemplates: {
      items: Template[];
    };
  };
}

function showTemplates(){
    const [templates, setTemplates] = useState<Template[]>([]);
  const [templatesWithImages, setTemplatesWithImages] = useState<Template[]>(
    []
  );

  useEffect(() => {
    const fetchTemplates = async () => {
      try {
        const result = (await API.graphql(
          graphqlOperation(listTemplates)
        )) as ListTemplatesResult;
        setTemplates(result.data.listTemplates.items);
      } catch (error) {
        console.error("Error fetching templates:", error);
      }
    };

    fetchTemplates();
  }, []);

  useEffect(() => {
    const fetchImages = async () => {
      const updatedTemplates = await Promise.all(
        templates.map(async (template) => {
          const imageUrl = await Storage.get("Template_Img.png");
          console.log(imageUrl);
          return { ...template, template_image: imageUrl };
        })
      );
      setTemplatesWithImages(updatedTemplates);
    };

    if (templates.length > 0) {
      fetchImages();
    }
  }, [templates]);

  const [backgroundImageUrl, setBackgroundImageUrl] = useState("");

  useEffect(() => {
    const fetchBackgroundImage = async () => {
      try {
        const imageUrl = await Storage.get("bg2.jpg");
        setBackgroundImageUrl(imageUrl as string);
      } catch (error) {
        console.error("Error fetching background image:", error);
      }
    };

    fetchBackgroundImage();
  }, []);

  const backgroundImageStyle: CSSProperties = {
    backgroundImage: `url(${backgroundImageUrl})`,
  };

  return (
    <Layout>
      <div
        className={styles.backgroundImage}
        style={backgroundImageStyle}
      ></div>
          <h2 className={styles.header}>Available templates:</h2>
          <div className={styles.gridContainer}>
            {templatesWithImages.map((template) => (
              <div
                key={template.id}
                className={styles.template}
              >
                <TemplateItem
                  url={template.template_image}
                  name={template.name}
                />
              </div>
            ))}
          </div>
        </Layout>
      )};

export default showTemplates;