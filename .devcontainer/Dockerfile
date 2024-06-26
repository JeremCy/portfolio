ARG IMAGE=ubuntu
ARG VERSION=20.04

FROM ${IMAGE}:${VERSION}

ARG DISTRO=ubuntu
ARG USERNAME=developer
ARG USER_UID=1000
ARG USER_GID=1000
ARG DEBIAN_FRONTEND=noninteractive
ARG NODE_VERSION=19
ARG PHP_VERSION=8.2
ENV LC_ALL=C.UTF-8

LABEL maintainer="Madalin Ignisca"
LABEL version="6.0.0"
LABEL description="Development environment for the joy and pleasure of web developers"
LABEL repo="https://github.com/madalinignisca/devcontainers"

ADD unminimize /tmp/unminimize
RUN chmod 700 /tmp/unminimize \
    && /tmp/unminimize

ADD https://getcomposer.org/composer-stable.phar /usr/local/bin/composer
RUN chmod 755 /usr/local/bin/composer

RUN groupadd --gid ${USER_GID} ${USERNAME} \
    && useradd --create-home --shell /bin/bash --uid ${USER_UID} --gid ${USER_GID} ${USERNAME}

ADD .editorconfig /home/${USERNAME}

RUN chown ${USERNAME}:${USERNAME} /home/${USERNAME}/.editorconfig

RUN apt-get update \
    && apt-get upgrade -y \
    && apt-get install -y \
      bind9-dnsutils \
      ca-certificates \
      curl \
      gnupg \
      lsb-release \
      openssl \
      software-properties-common \
      bash-completion \
      build-essential \
      ffmpeg \
      gettext-base \
      git \
      htop \
      jq \
      less \
      lsof \
      man-db \
      manpages \
      mariadb-client \
      mc \
      nano \
      net-tools \
      openssh-client \
      postgresql-client \
      procps \
      psmisc \
      redis-tools \
      rsync \
      sqlite3 \
      sudo \
      time \
      unzip \
      wget \
      whois \
      zip

RUN if [ "$DISTRO" = "ubuntu" ] ; \
    then \
        apt-get install -y language-pack-en ; \
    fi

RUN curl -L 'https://deb.nodesource.com/gpgkey/nodesource.gpg.key' | apt-key add - \
    && echo "deb https://deb.nodesource.com/node_${NODE_VERSION}.x $(lsb_release -cs) main" > /etc/apt/sources.list.d/nodesource.list

RUN if [ "$DISTRO" = "debian" ] ; \
    then \
        curl -L "https://packages.sury.org/php/apt.gpg" | apt-key add - \
        && echo "deb https://packages.sury.org/php/ $(lsb_release -cs) main" > /etc/apt/sources.list.d/php.list ; \
    else \
        add-apt-repository -n ppa:ondrej/php \
        && add-apt-repository -n ppa:openswoole/ppa ; \
    fi


RUN apt update \
    && apt-get install -y \
      nodejs \
      php${PHP_VERSION}-apcu \
      php${PHP_VERSION}-bcmath \
      php${PHP_VERSION}-cli \
      php${PHP_VERSION}-curl \
      php${PHP_VERSION}-decimal \
      php${PHP_VERSION}-ds \
      php${PHP_VERSION}-gd \
      php${PHP_VERSION}-gmp \
      php${PHP_VERSION}-intl \
      php${PHP_VERSION}-mbstring \
      php${PHP_VERSION}-mcrypt \
      php${PHP_VERSION}-memcached \
      php${PHP_VERSION}-mongodb \
      php${PHP_VERSION}-mysql \
      php${PHP_VERSION}-pgsql \
      php${PHP_VERSION}-redis \
      php${PHP_VERSION}-sqlite3 \
      php${PHP_VERSION}-xdebug \
      php${PHP_VERSION}-xhprof \
      php${PHP_VERSION}-xml \
      php${PHP_VERSION}-zip

RUN if [ "$DISTRO" = "ubuntu" ] ; then \
        apt-get install -y php${PHP_VERSION}-openswoole ; \
    fi

RUN corepack enable

RUN echo "$USERNAME ALL=(ALL) NOPASSWD:ALL" > /etc/sudoers.d/${USERNAME} \
    && chmod 0440 /etc/sudoers.d/${USERNAME}

RUN mkdir -p /workspace \
    && chown -R ${USER_UID}:${USER_GID} /workspace

RUN mkdir -p /home/${USERNAME}/.local \
    && chown ${USERNAME}:${USERNAME} /home/${USERNAME}/.local \
    && echo "export PROMPT_COMMAND='history -a'" >> "/home/${USERNAME}/.bashrc" \
    && echo "export HISTFILE=/home/${USERNAME}/.local/bash_history" >> "/home/${USERNAME}/.bashrc"

COPY bashprompt /tmp/bashprompt
RUN cat /tmp/bashprompt >> /home/${USERNAME}/.bashrc

COPY aliases /home/${USERNAME}/.bash_aliases
RUN chown ${USERNAME}:${USERNAME} /home/${USERNAME}/.bash_aliases \
    && chown ${USERNAME}:${USERNAME} /home/${USERNAME}/.bash_aliases

EXPOSE 3000

HEALTHCHECK NONE

ENV LANG en_US.utf8

USER ${USERNAME}

# make npm run dev on start up
CMD ["/bin/bash", "-c", "npm run dev"]
