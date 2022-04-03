package es.upm.dit.isst.tfgapi.model;

import javax.persistence.*;

//import org.springframework.boot.autoconfigure.liquibase.LiquibaseDataSource;

@Entity
public class Vehiculo {
    @Id
    private int idveh;
    private boolean aparcadoOk;
    private boolean libre;
    
    @Lob
    private byte[] ubicacion;

    @Lob
    private byte[] tipo;

    public Vehiculo() {

    }
    public byte[] getTipo() {
        return this.tipo;
    }

    public void setTipo(byte[] tipo) {
        this.tipo = tipo;
    }

    public int getIdveh() {
        return this.idveh;
    }

    public void setIdveh(int idveh) {
        this.idveh = idveh;
    }

    public boolean getAparcadoOk() {
        return this.aparcadoOk;
    }

    public void setAparcadoOk(boolean aparcadoOk) {
        this.aparcadoOk = aparcadoOk;
    }
    

    public boolean getLibre() {
        return this.libre;
    }

    public void setLibre(boolean libre) {
        this.libre = libre;
    }

    public byte[] getUbicacion() {
        return this.ubicacion;
    }

    public void setUbicacion(byte[] ubicacion) {
        this.ubicacion = ubicacion;
    }

    
}
