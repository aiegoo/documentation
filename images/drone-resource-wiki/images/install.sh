#Install git, vim and other tools for Conda 

sudo apt update && sudo apt install -y git vim


#Make Anaconda Installer executable and run it under silent mode (without prompts)

chmod +x Anaconda3-2019.10-Linux-x86_64.sh
./Anaconda3-2019.10-Linux-x86_64.sh -b -p $HOME/anaconda3 -f


#Copy everything from the Contents folder into the home folder for the user.

cp -rT Contents/. $HOME/
cd $HOME


#Add Conda to PATH so you can use Conda commands like [conda activate]

echo "export PATH=~/anaconda3/bin:$PATH" >> .bashrc
source .bashrc


#Install pip package manager for Python via Conda. Currently for Python 3 only.

conda install pip
conda activate

#Install necessary libraries for tensorflow

pip install setuputils typed-ast && pip install --user setuputils typed-ast


#Update the python kernel (version) for the Jupyter Notebook

pip install ipykernel && pip install --user ipykernel
python3 -m ipykernel install && python3 -m ipykernel install --user


#Install remaining packages specified in requirements.txt

pip install -r requirements.txt && pip install --user -r requirements.txt
