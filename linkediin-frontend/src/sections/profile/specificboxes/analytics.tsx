import React, { useEffect, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { useLocalStorage } from "src/hooks/use-local-storage";
import { EditAboutDialog } from "../diologues";

export function Analytics() {
       
      
        return (
          <>
            <Box sx={{ width: 730, paddingRight: 2 }}>
              <Box
                sx={{
                  position: "relative",
                  minHeight: 240,
                  width: "100%",
                  mt: 1.1,
                  bgcolor: "white",
                  borderRadius: "10px",
                  display: "flex",
                  flexDirection: "column",
                  overflow: "hidden", // prevents border bleed
                  border: "1px solid #eee", // consistent border styling
                }}
              >
                {/* Padded Inner Content */}
                <Box sx={{ p: "20px", flexGrow: 1 }}>
                  <Typography sx={{ fontSize: "1.1rem", fontWeight: 600 }}>
                    Analytics
                  </Typography>
      
                  <Typography
                    sx={{
                      fontSize: "0.7rem",
                      color: "text.secondary",
                      display: "flex",
                      alignItems: "center",
                      gap: 0.5,
                      mt: 0.5,
                    }}
                  >
                    <Box
                      component="img"
                      src="/svg/eye.svg"
                      alt="Private icon"
                      width="15"
                      height="15"
                      sx={{ color: "text.secondary" }}
                    />
                    Private to you
                  </Typography>
      
                  {/* Analytics Cards */}
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      gap: 2,
                      mt: 2,
                    }}
                  >
                    <Box sx={{ flex: 1, bgcolor: "#f9f9f9", borderRadius: 2, p: 1 }}>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          fontSize: "0.9rem",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Box
                          component="img"
                          src="/svg/person.svg"
                          alt="Profile Views Icon"
                          sx={{
                            width: 20,
                            height: 20,
                            color: "text.secondary",
                            mr: 1,
                          }}
                        />
                        90 Profile Views
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ fontSize: "0.8rem", ml: 3.5 }}
                      >
                        Discover who's viewed your profile.
                      </Typography>
                    </Box>
      
                    <Box sx={{ flex: 1, bgcolor: "#f9f9f9", borderRadius: 2, p: 1 }}>
                      <Typography variant="subtitle2" sx={{ fontSize: "0.9rem" }}>
                        60 Post Impressions
                      </Typography>
                      <Typography variant="caption" sx={{ fontSize: "0.7rem" }}>
                        Check out who's engaging with your posts.
                      </Typography>
                    </Box>
      
                    <Box sx={{ flex: 1, bgcolor: "#f9f9f9", borderRadius: 2, p: 1 }}>
                      <Typography variant="subtitle2" sx={{ fontSize: "0.9rem" }}>
                        13 Search Appearances
                      </Typography>
                      <Typography variant="caption" sx={{ fontSize: "0.7rem" }}>
                        See how often you appear in search results.
                      </Typography>
                    </Box>
                  </Box>
                </Box>
      
                {/* Footer Button inside parent box */}
                <Box sx={{ borderTop: "1px solid #eee" }}>
                  <Button
                    fullWidth
                    variant="outlined"
                    // onClick={handleOpenAbout}
                    sx={{
                      fontSize: "0.75rem",
                      textTransform: "none",
                      border: "none",
                      borderBottomLeftRadius: "10px",
                      borderBottomRightRadius: "10px",
                      "&:hover": {
                        textDecoration: "underline",
                        backgroundColor: "transparent",
                      },
                    }}
                  >
                    Show all analytics
                  </Button>
                </Box>
              </Box>
            </Box>
      
            {/* About Dialog */}
            {/* <EditAboutDialog openAbout={openAbout} onCloseAbout={handleCloseAbout} /> */}
          </>
        );
      }
