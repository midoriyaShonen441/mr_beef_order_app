FROM mariadb:10.9.1-rc-jammy

ENV MARIADB_ROOT_PASSWORD root
ENV MARIADB_DATABASE mr_beef_stock

RUN mkdir -p /var/lib/mysql/initialCommand
WORKDIR /var/lib/mysql/initialCommand

COPY ./SQL .
EXPOSE 3306

# RUN mariadb --user=root --password=root --database=mr_beef_stock < ./01_user_order.sql 