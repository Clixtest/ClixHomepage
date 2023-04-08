import os
from moviepy.editor import *

def convert_mp4_to_gif(input_file, output_file, width=135, height=240, fps=15):
    # Load the video
    video = VideoFileClip(input_file)

    # Resize the video
    video = video.resize((width, height))

    # Set the frame rate
    video = video.set_fps(fps)

    # Convert the video to GIF
    video.write_gif(output_file, program='ffmpeg', opt='optimizeplus', fuzz=5, verbose=True, logger=None)

def process_directory(directory, width=1920, height=1080, fps=15):
    # Iterate through all files in the current directory
    for filename in os.listdir(directory):
        # Check if the file has an MP4 extension
        if filename.lower().endswith(".mp4"):
            input_file = os.path.join(directory, filename)
            output_file = os.path.join(directory, os.path.splitext(filename)[0] + ".gif")
            print(f"Converting {input_file} to {output_file}")
            convert_mp4_to_gif(input_file, output_file, width, height, fps)
            print(f"Conversion of {input_file} completed")

# Example usage
current_directory = os.getcwd()
width = 720
height = 1280
fps = 10

process_directory(current_directory, width, height, fps)
