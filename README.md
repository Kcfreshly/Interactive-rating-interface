We want to write 
a better README file, 

including better installation instructions and 

a better description of the package features. 


# Project description

The Ersilia Model Hub is the main project of the Ersilia Open Source Initiative. 
The Ersilia Open Source Initiative's primary project is the 'Ersilia Model Hub.' The Ersilia Model Hub's objective is to provide a platform for a user-friendly deployment of Artificial Intelligence and Machine Learning (AI/ML) models for drug discovery. The Ersilia Model Hub collects and deploys AI/ML models currently scattered in several scientific papers, code repositories, and other supplementary materials. The platform will enable scientists without coding expertise to easily browse through thousands of libraries relevant to their research, which will lead to more precise model predictions. 

Most of the tools developed, even when published and fully open-sourced, remain unusable by a large majority of the scientific community who do not have the necessary expertise. Pharmaceutical companies with the right technologies are reluctant to develop this area because they do not see a massive return on investment. This gap becomes even more prominent in low-income country institutions where access to bioinformatic facilities or data science experts is scarce.

Ersilia Model Hub aims to fulfill the ultimate goal of Ersilia, which is to lower the barrier to drug discovery, encouraging academic groups and companies to pursue the development of new medicines following the principles of Open Science. With this project, we hope to democratize access to this expertise and support research into neglected and infectious diseases.

**Citing**

If you use this software, please cite it as below."
authors:
  family-names: "Turon"
  given-names: "Gemma"
  orcid: "https://orcid.org/0000-0001-6798-0275"
  family-names: "Duran-Frigola"
  given-names: "Miquel"
  orcid: "https://orcid.org/0000-0002-9906-6936"
title: "Ersilia Model Hub: a repository of AI/ML for neglected tropical diseases"
version: 1.0.0
doi: 10.5281/zenodo.1234
date-released: 2021-12-15
url: "https://github.com/ersilia-os/ersilia".



# Installation
## Python and Conda
- We have tested our tools on Python 3.7 and above. Please make sure you have the right Python installation on your computer.
- Although not strictly necessary, we encourage the use of Conda environments. If Conda is available in the local device, the Ersilia tool will try to use it in order to handle dependencies safely and efficiently. 
- Docker containers are an excellent way to share applications and simplify the management of system requirements and configurations. Please install Docker to ensure that all our AI/ML assets will work smoothly in your local device.
- Git and Git LFS. All of our code is hosted in the Ersilia Github Organization profile. The Ersilia tool needs to fetch code from GitHub, so make sure Git is installed on your device. 
## Install on Linux and MacOSX
Open a terminal. The best is to set up a Conda environment.
>
```
> 1 #create a conda environment
> 2 conda create -n ersilia python=3.7
> 3 #activate the environment
> 4 conda activate ersilia
```
Then, simply install the Ersilia Python package.
```
1 #clone from github
2 https://github.com/ersilia-os/ersilia.git
3 cd ersilia
4 #install with pip (use -e for developer mode)
5 pip install -e .
```
You should be done! Quickly check that the CLI works on your terminal.
```
1 #see ersilia CLI options
2 ersilia --help
```
## The Isaura data lake
We highly recommend installation of the Isaura data lake. With Isaura, you will be able to cache your model predictions (i.e. store them in your local computer). Isaura is a relatively light Python package:
```
1 #clone from github
2 git clone https://github.com/ersilia-os/isaura.git
3 cd isaura
4 #install with pip (use -e for developer mode)
5 pip install -e
```
## Install on Windows
>We are not testing Windows installation consistently. If you encounter problems, please reach out to us at hello@ersilia.io.
We recommend that you install Ubuntu on your Windows machine. This can be now done very easily with WSL. You will need at least Windows 10.
Open a Power Shell with Admin permissions and type:
```
1 wsl --install
```
Then simply install the Ubuntu terminal on Windows.
Inside the Ubuntu terminal, you can now follow the installation instructions above.

## Command-line only installation snippets for Ubuntu
Below you can find a few snippets that can help you install dependencies in a Ubuntu terminal.
### The gcc compiler
Probably you have the gcc compiler installed already. Just in case:
```
1 sudo apt install build-essential
```
### Conda package manager
If you don't have the Conda package manager yet, we suggest you install Miniconda:
```
1 mkdir -p ~/miniconda3
2 wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh -O ~/miniconda3/miniconda.sh
3 bash ~/miniconda3/miniconda.sh -b -u -p ~/miniconda3
4 rm -rf ~/miniconda3/miniconda.sh
5 ~/miniconda3/bin/conda init bash
6 ~/miniconda3/bin/conda init zsh
```
### GitHub CLI
Once Conda is installed (see above), you can use it to install the fantastic GitHub CLI:
```
1 conda install gh -c conda-forge
```
Use the GitHub CLI to login. This may be helpful if you have contributor permissions at Ersilia. Type:
```
1 gh auth login
```
And then follow the instructions.
### Git LFS
Git Large File Storage (LFS) can be installed from Conda as well:
```
1 conda install git-lfs -c conda-forge
```
Activate Git LFS:
```
1 git-lfs install
```
# Quick start
Command-line interface
We provide a command-line interface (CLI) to interact with the Ersilia Model Hub. To check the available commands, simply type:
## list available commands
```
1 ersilia --help
```
## Browse the model catalog
You can explore our catalog of models. The following will return a list of models currently available in our remote repositories.
```
1 #catalog of models
2 ersilia catalog
```
## Fetch model and install it locally
The first step is to download the model to your local device and install it along with its dependencies. By default, a ~/eos directory (for Ersilia Open Source) will be created in your HOME. This folder will contain all fetched models along with additional files to manage the AI/ML content available locally.
To download and install the model, simply use the fetch command:
```
1 #fetch model from remote repository
2 ersilia fetch <model>
```
## Serve model
```
1 ersilia serve <model>
```
# Usage
Let's consider the chemprop-antibiotic as an example. You can fetch your model with the Ersilia CLI as shown above:
## Make predictions
```
1 ersilia fetch chemprop-antibiotic
```
Generate a few (5) example molecules, to be used as input. Molecules are typically expressed in SMILES format.
```
1 ersilia example chemprop-antibiotic -n 5 -f my_molecules.csv
```
Then, serve your model:
```
1 ersilia serve chemprop-antibiotic
```
And run the prediction API:
```
1 ersilia api -i my_molecules.csv -o my_predictions.csv
```
Finally, close the service when you are done.
```
1 ersilia close
```
Please see the Ersilia Book for more examples and detailed explanations.
## Close model
Once you are done with predictions, it is advised to stop the model server:
1 #close model
2 ersilia close
## Delete model
If you are sure you don't want to use a model anymore, you may want to remove it from your computer. This includes deleting all model files and specific dependencies:
1 #delete model
2 ersilia delete chemprop-antibiotic
# As a Python package
Models can be fetched from the Ersilia Model Hub, served, and run as a Python package. The main class is called ErsiliaModel:
Please see the Ersilia Book for more examples and detailed explanations.
# Features
Data driven
Ersilia technology achieves state-of-the-art performance thanks to the integration of chemical, genomic and biomedical text data. Our AI tools are trained on millions of data points collected from the scientific literature and are available at no cost.

Bioactivity signatures
Unlike conventional methods, we build upon bioactivity signatures, a richer representation of molecules. These embed all the experimental data for each compound, including targets and side-effects profiles, and are thus more powerful and clinically relevant predictors.

User friendly
Our tools are designed to facilitate the use of AI/ML tools. Scientists can browse a collection of models, choose the ones relevant to their research interests and run predictions without writing a single line of code.

Open source
All our assets are released under a permissive open source license. This means the scientific community can review, contribute and improve our code, resulting in tools validated more extensively than in the traditional peer-review system.
# Requirements
bentoml==0.11.0
PyGitHub
streamlit
pygit2
osfclient
joblib
hashids
bioservices
biopython
markdown
pycrypto
python-dateutil<2.8.1,>=2.1
urllib3
requests<=2.24
dockerfile-parse
pytest==3.10.0
sphinx==1.8.1
boto3
PyYAML
emoji
loguru
virtualenv
pyairtable
PyDrive2
h5py
inputimeout

Contribute
The Ersilia Model Hub is developed and maintained by a small team of Ersilia employees and volunteers, and any contribution is highly valued! There are several ways in which you can contribute to the project:

If you are a developer, check the issues and help us to improve the tool
If you have developed a model and would like to include it in the Hub to increase its visibility and usability, please contact us or open an issue. We are currently working on an automated contribution tool to facilitate the process.
If you are a scientist with a cool dataset, also contact us or open an issue as we might be interested in developing a model based on the data!
If there is a third-party model you have identified and would like to see it in the Hub, open an issue with the relevant information and we will get back to you as soon as possible.
The Ersilia Open Source Initiative adheres to the Contributor Covenant guidelines.

Roadmap
We are working to grow the Hub organically and responding to our users needs. Here a detail of the next features to come, stay tuned!

Deployment for Windows System (expected: February 2022)
Automated third-party model contributions (expected: March 2022)
Possibility to run lite models online (expected: May 2022)
License and citation
This repository is open-sourced under the MIT License. Please cite us if you use it.

About us
The Ersilia Open Source Initiative is a Non Profit Organization incorporated with the Charity Commission for England and Wales (number 1192266). Our mission is to reduce the imbalance in biomedical research productivity between countries by supporting research in underfunded settings.

You can support us via Open Collective.





The models embedded in the hub include both models published in the literature (with appropriate third party acknowledgment) and models developed by the Ersilia team or contributors. All assets are open source, but please do check the Licenses of each model before using them.

Read more about the project better at the Ersilia Book
Available models can be checked at Ersilia Model Hub

Researchers interested in a specific disease, target or pathogen can use our tools to prioritize drug candidates. The way around is also true. Given a drug of interest, Ersilia will scope for potential indications, mechanisms of action or toxicities.


Increase the visibility of existing methods
We collect and deploy AI/ML models currently scattered in scientific papers, code repositories and supplementary materials.

Exploit results of drug screening campaigns
We search the scientific literature for relevant experimental datasets and use them to train our own AI/ML models.

Foster in-country research
We actively seek collaborators working in infectious and neglected diseases to jointly develop customised tools.

Emphasis on local resources
We leverage the potential of natural products to identify new chemical leads for endemic diseases.

