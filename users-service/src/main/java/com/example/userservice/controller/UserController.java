package com.example.userservice.controller;

import com.example.userservice.model.User;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/users")
public class UserController {
    private final Map<String, User> users = new HashMap<>();

    @GetMapping
    public Collection<User> getAllUsers() {
        return users.values();
    }

    @PostMapping
    public User addUser(@RequestBody User user) {
        String id = UUID.randomUUID().toString();
        user.setId(id);
        users.put(id, user);
        return user;
    }

    @GetMapping("/{id}")
    public User getUser(@PathVariable String id) {
        return users.get(id);
    }
}