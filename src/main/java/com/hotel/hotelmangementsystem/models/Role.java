package com.hotel.hotelmangementsystem.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotBlank;

@Entity
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @NotBlank(message = "Role title is required")
    @Column(unique = true)
    private String role_title;

    public Role(int id, String role_title) {
        this.id = id;
        this.role_title = role_title;
    }

    public Role() {

    }

    public int getId() {
        return this.id;
    }

    public String getRole_title() {
        return this.role_title;
    }

    public void setRole_title(String role_title) {
        this.role_title = role_title;
    }

    @Override
    public String toString() {
        return "{" + " id='" + getId() + "'" + ", role_title='" + getRole_title() + "'" + "}";
    }


}
