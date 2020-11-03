FROM node:lts

ENV LC_ALL C.UTF-8
ENV LANG C.UTF-8
ENV NPM_CONFIG_LOGLEVEL info

VOLUME .:/srv/www
WORKDIR /srv/www

RUN sed -i 's/\(security\|deb\).debian.org/mirrors.aliyun.com/g' /etc/apt/sources.list \
        && ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime

RUN apt-get update && apt-get dist-upgrade -y \
        && apt-get install -y --assume-yes git \
		unzip \
		apt-utils \
		net-tools \
		wget \
		vim \
		htop \
		procps \
        && apt-get autoremove -y \
        && apt-get autoclean -y 

RUN npm config set registry https://registry.npm.taobao.org \
	&& npm install -g npm@7.0.7 \
	&& npm install -g gulp-cli 

RUN echo "alias ll='ls $LS_OPTIONS -l --color=auto' 2>/dev/null" >> ~/.bashrc \
        && echo "alias l.='ls $LS_OPTIONS -d .* --color=auto' 2>/dev/null" >> ~/.bashrc \
        && echo "alias ls='ls $LS_OPTIONS --color=auto' 2>/dev/null" >> ~/.bashrc \
        && /bin/bash -c "source ~/.bashrc"

