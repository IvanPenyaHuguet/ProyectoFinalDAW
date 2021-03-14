// package com.proyectofinal.daw.services.authentication;

// import com.proyectofinal.daw.entities.User;
// import com.proyectofinal.daw.repositories.UserRepository;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.security.core.userdetails.UserDetails;
// import org.springframework.security.core.userdetails.UserDetailsService;
// import org.springframework.security.core.userdetails.UsernameNotFoundException;
// import org.springframework.stereotype.Service;

// @Service
// public class UserAuthDetails implements UserDetailsService {

//     @Autowired
//     private UserRepository userRepository;
  
//     @Override
//     public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//       final User user = userRepository.findByUsername(username);
  
//       if (user == null) {
//         throw new UsernameNotFoundException("User '" + username + "' not found");
//       }
  
//       return org.springframework.security.core.userdetails.User//
//           .withUsername(username)//
//           .password(user.getPass())//
//           .authorities(user.getRole())//
//           .accountExpired(false)//
//           .accountLocked(false)//
//           .credentialsExpired(false)//
//           .disabled(false)//
//           .build();
//     }
  
//   }
