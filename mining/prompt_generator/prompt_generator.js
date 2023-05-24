const fs = require('fs');
const axios = require('axios');
const prompt = require('prompt-sync')();

const topics = ['style', 'gen-modifier', 'artist', 'site', 'details', 'hd'];

async function generatePrompt(subject) {
  if (!fs.existsSync('./inpainting-prompt-data.json')) {
    console.log('Downloading prompt source data...');
    const url = 'https://raw.githubusercontent.com/WASasquatch/noodle-soup-prompts/main/nsp_pantry.json';
    const response = await axios.get(url);
    fs.writeFileSync('./inpainting-prompt-data.json', JSON.stringify(response.data, null, 2));
    console.log('prompt source data downloaded');
    buildPrompt(subject, response.data);
  } else {
    const data = fs.readFileSync('./inpainting-prompt-data.json', 'utf8');
    buildPrompt(subject, JSON.parse(data));
  }
}

function buildPrompt(subject, promptData) {
  const promptDict = {};
  for (const topic of topics) {
    switch (topic) {
      case 'details':
        promptDict[topic] = Array.from({ length: 3 }, () => {
          return promptData[topic][Math.floor(Math.random() * promptData[topic].length)];
        });
        break;
      default:
        promptDict[topic] = promptData[topic][Math.floor(Math.random() * promptData[topic].length)];
        break;
    }
  }
  const promptString = `${promptDict['style']} of ${subject}, by ${promptDict['artist']}, ${promptDict['site']}, ${promptDict['gen-modifier']}, ${promptDict['details'].join(', ')}, ${promptDict['hd']}`;
  console.log(`YOUR PROMPT: ${promptString}`);
}

async function main() {
  const subject = prompt('Subject of prompt: ');
  generatePrompt(subject);
}

(async () => {
	await main()
	}
)();