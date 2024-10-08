package com.example.KIDsConnect.service;

import com.example.KIDsConnect.model.Group;
import com.example.KIDsConnect.repository.GroupRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class GroupService {
    @Autowired
    private GroupRepository groupRepository;

    public Group saveGroup(Group group) {
        return groupRepository.save(group);
    }

    public Optional<Group> getGroupById(Long id) {
        return groupRepository.findById(id);
    }

    public void deleteGroup(Long id) {
        groupRepository.deleteById(id);
    }
}