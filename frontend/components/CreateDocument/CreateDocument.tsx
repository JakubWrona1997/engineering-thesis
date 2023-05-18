import { CSSProperties, useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listTemplates } from "../../graphql/queries";
import TemplateItem from "../../ui-components/TemplateItem";
import Layout from "../NavBar/NavBar";
import styles from "./CreateDocument.module.css";
import { Storage } from "aws-amplify";
import FillTemplate from "../FillTemplate/FillTemplate";

interface Template {
  id: string;
  name: string;
  template_image: string;
  metadata: Record<string, string>;
}

interface ListTemplatesResult {
  data: {
    listTemplates: {
      items: Template[];
    };
  };
}

interface ImageInputProps {
  imageUrl: string;
  data: string;
}

function CreateDocumentPage() {
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

  const [selectedTemplate, setSelectedTemplate] = useState<Template  | null>(
    null
  );
  const [currentStep, setCurrentStep] = useState("chooseTemplate");

  const handleTemplateSelection = (template: Template) => {
    setSelectedTemplate(template);
    setCurrentStep("fillTemplate");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  useEffect(() => {
    if (currentStep === "fillTemplate") {
      console.log(selectedTemplate);
    }
  }, [currentStep]);

  const handleBack = () => {
    setSelectedTemplate(null);
    setCurrentStep("chooseTemplate");
  };

  const handleFinish = () => {
    setCurrentStep("finish");
  };

  return (
    <Layout>
      <div
        className={styles.backgroundImage}
        style={backgroundImageStyle}
      ></div>
      {currentStep === "chooseTemplate" && (
        <>
          <h2 className={styles.header}>Choose your template:</h2>
          <div className={styles.gridContainer}>
            {templatesWithImages.map((template) => (
              <div
                key={template.id}
                className={styles.template}
                onClick={() => handleTemplateSelection(template)}
              >
                <TemplateItem
                  url={template.template_image}
                  name={template.name}
                />
              </div>
            ))}
          </div>
        </>
      )}
      {currentStep === "fillTemplate" && (
        <div>
          <h2 className={styles.header}>Fill the Template</h2>
          <FillTemplate template={selectedTemplate} onBack={handleBack} onFinish={handleFinish}/>
        </div>
      )}
      {currentStep === "finish" && (
        <div>
          <h2 className={styles.header}>Document created!</h2>
        </div>
      )}
    </Layout>
  );
}

export default CreateDocumentPage;
