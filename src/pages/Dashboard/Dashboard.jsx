import React from "react";
import styles from "./Dashboard.module.css";

export default function Dashboard() {
  return (
    <>
      {/* Layout de duas colunas: conteúdo à esquerda, sidebar à direita */}
      <div className={styles.pageLayout}>
        {/* ---------- CONTEÚDO PRINCIPAL ------------------- */}
        <main className={styles.mainContent}>
          {/* Saudação */}
          <div className={styles.greetingWrapper}>
          <h1 className={styles.greeting}>Olá, Fabiano</h1>
          </div>

       {/* Três blocos de informação (lado a lado) */}
          <div className={styles.infoRow}>
            <div className={styles.infoBox}>
           <h3 className={styles.infoTitle}>Próximos conflitos na escala</h3>
            </div>

         <div className={styles.infoBox}>
        <h3 className={styles.infoTitle}>Weliness da loja</h3>
            </div>

         <div className={styles.infoBox}>
             <h3 className={styles.infoTitle}>Horas extras disponíveis</h3>
            </div>
          </div>

          {/* Título – Fluxo de funcionários */}
          <div className={styles.subtitleWrapper}>
            <h2 className={styles.subtitle}>Fluxo de funcionários</h2>
          </div>

          {/* Placeholder do gráfico (ainda vazio) */}
          <div className={styles.graphPlaceholder} />

          {/* Título – Alerta */}
          <div className={styles.titleWrapper}>
          <h2 className={styles.title}>Alerta</h2>
          </div>

          {/* Conteúdo com borda externa */}
          <div className={styles.outerBorder}>
          <div className={styles.container}>
              <div className={styles.boxOne}>
          <p className={styles.textOne}>Papéis ociosos detectados</p>
              </div>

              <div className={styles.boxTwo}>
                <p className={styles.textTwo}>Papéis ociosos detectados</p>
              </div>

              <div className={styles.boxThree}>
                <p className={styles.textThree}>Papéis ociosos detectados</p>
              </div>
            </div>
          </div>
        </main>

        {/* ------------------- SIDEBAR DIREITA ------------------- */}
        <aside className={styles.notificationsSidebar}>
          {/* ----- SEÇÃO DE PESQUISA (fica acima) ----- */}
          <div className={styles.searchSection}>
            <div className={styles.searchContainer}>
              {/* Input com ícone de lupa dentro */}
              <div className={styles.inputWrapper}>
                <span className={styles.searchIcon}>🔍</span>
                <input
                  type="text"
                  placeholder="Buscar…"
                  className={styles.searchInput}
                />
              </div>

            {/* Botão de filtro */}
              <button className={styles.filterButton}>Filtrar</button>
            </div>
          </div>

          {/* ----- SEÇÃO DE NOTIFICAÇÕES (abaixo) ----- */}
          <div className={styles.notificationsSection}>
            <h2 className={styles.notificationsTitle}>Notificações</h2>

            <ul className={styles.notificationsList}>
              <li className={styles.notificationItem}>
                Nova escala criada com sucesso
              </li>
              <li className={styles.notificationItem}>Folgas alteradas</li>
              <li className={styles.notificationItem}>
                Nova análise disponível
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </>
  );
}