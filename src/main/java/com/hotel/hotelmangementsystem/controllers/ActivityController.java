package com.hotel.hotelmangementsystem.controllers;

import com.hotel.hotelmangementsystem.models.Activity;
import com.hotel.hotelmangementsystem.services.ActivityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
// @RequestMapping("/api/activities")
public class ActivityController {
    @Autowired
    private ActivityService activityService;
    @GetMapping("/api/activities")
    public List<Activity> getAllActivities() {
        return activityService.getAllActivities();
    }
    @GetMapping("/api/activities/{id}")
    public Activity getActivityById(@PathVariable Integer id) {
        return activityService.getActivityById(id);
    }
    @PostMapping("manager/api/activities")
    public Activity createActivity(@RequestBody Activity activity) {
        return activityService.createOrUpdateActivity(new Activity(activity.getDurationHrs(), activity.getDate(), activity.getHostName()));
    }
    @PutMapping("manager/api/activities/{id}")
    public Activity updateTodo(@PathVariable Integer id, @RequestBody Activity activity) {
        Activity existingActivity = activityService.getActivityById(id);
        if (existingActivity == null) {
            return null;
        }
        existingActivity.setDurationHrs(activity.getDurationHrs());
        existingActivity.setDate(activity.getDate());
        existingActivity.setHostName(activity.getHostName());
        return activityService.createOrUpdateActivity(existingActivity);
    }
    @DeleteMapping("manager/api/activities/{id}")
    public void deleteTodoById(@PathVariable Integer id) {
        activityService.deleteActivityById(id);
    }
}
