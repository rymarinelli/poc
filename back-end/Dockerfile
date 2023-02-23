FROM ubuntu:latest

WORKDIR usr/src

RUN apt-get update -y

RUN apt install curl -y

RUN apt install  npm -y


RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash -

RUN echo nodejs -v

RUN apt install -y make python3 build-essential
 

RUN npm install ws node-pty


RUN echo "dragon" | md5sum  > hashOne.txt


RUN echo "dragon" | sha256sum  > hashTwo.txt


RUN sed -i 's/-/ /g' hashOne.txt
RUN sed -i 's/-/ /g' hashTwo.txt

RUN sed -i 's/\s//g' hashOne.txt
RUN sed -i 's/\s//g' hashTwo.txt

RUN apt install openssl


RUN printf "dragon" | openssl dgst -sha3-512 > hashThree.txt

RUN sed -i 's/SHA3-512(stdin)=/ /g' hashThree.txt
RUN sed -i 's/\s//g' hashThree.txt


RUN apt install hashcat -y

RUN apt install wget


RUN wget https://github.com/brannondorsey/naive-hashcat/releases/download/data/rockyou.txt


COPY server.js server.js


EXPOSE 3000

CMD ["sh", "-c", "node server.js ${PORT:-3000}"]

