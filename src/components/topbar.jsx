import React from "react";

function Topbar({ title,styles }){
    return (
        <header style={styles.topbar}>
             <h1 style={styles.topbarTitle}>WebTech Practice Dashboard</h1>
        </header>
    );
}

export default Topbar;