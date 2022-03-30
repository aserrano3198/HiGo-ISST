package es.upm.dit.isst.tfgapi.model;

import javax.persistence.*;

@Entity
public class TFG {
    @Id
    private String email;
	private String pass;
	private String nombre;
	private String titulo;
    private String tutor;
	private int status;
    
    @Lob
    private byte[] memoria;
    private double nota;

    public TFG() {

    }

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPass() {
        return this.pass;
    }

    public void setPass(String pass) {
        this.pass = pass;
    }

    public String getNombre() {
        return this.nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getTitulo() {
        return this.titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public int getStatus() {
        return this.status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public byte[] getMemoria() {
        return this.memoria;
    }

    public void setMemoria(byte[] memoria) {
        this.memoria = memoria;
    }

    public double getNota() {
        return this.nota;
    }

    public void setNota(double nota) {
        this.nota = nota;
    }

    public String getTutor() {
        return this.tutor;
    }

    public void setTutor(String tutor) {
        this.tutor = tutor;
    }
}