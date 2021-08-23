FROM postgres
ENV POSTGRES_USER adminuser
ENV POSTGRES_PASSWORD admin1289
ENV POSTGRES_DB ruedata1
COPY userDB.sql /docker-entrypoint-initdb.d/
EXPOSE 5432