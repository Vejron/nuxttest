import { Client } from "@notionhq/client"

export default async (req, res) => {
  const data = await addItem('blaa blaa, texas', new Date());
  return data;
};

const notion = new Client({ auth: 'secret_1wCZdiqZ7vhCT3atZNjxVEmbLLaD7bWr2OrG8ABKqWJ'})

const databaseId = "b4127d82e19c4d5093a6b1cc6ea65c1e"

async function addItem(text) {
  try {
    const response = await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        title: { 
          title:[
            {
              "text": {
                "content": text
              }
            }
          ]
        }
      },
    })
    console.log(response)
    console.log("Success! Entry added.")
    return response;
  } catch (error) {
    console.error(error.body)
  }
}