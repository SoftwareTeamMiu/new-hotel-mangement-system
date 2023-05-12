package com.hotel.hotelmangementsystem.services;

import com.hotel.hotelmangementsystem.models.Activity;
import com.hotel.hotelmangementsystem.repositories.ActivityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ActivityService {
    @Autowired
    private ActivityRepository activityRepository;
    public List<Activity> getAllActivities() {
        return activityRepository.findAll();
    }
    public Activity getActivityById(Integer id) {
        return activityRepository.findById(id).orElse(null);
    }
    public Activity createOrUpdateActivity(Activity activity) {
        return activityRepository.save(activity);
    }
    public void deleteActivityById(Integer id) {
        activityRepository.deleteById(id);
    }
}
