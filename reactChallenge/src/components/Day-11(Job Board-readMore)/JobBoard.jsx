import { useEffect, useState } from "react";
import "./JobBoard.css";

function JobBoard() {
  const [jobIds, setJobIds] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [visibleJobs, setVisibleJobs] = useState(6);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch IDs
  useEffect(() => {
    async function fetchJobIds() {
      try {
        const response = await fetch(
          "https://hacker-news.firebaseio.com/v0/jobstories.json"
        );
        const data = await response.json();
        setJobIds(data);
      } catch (err) {
        setError("Failed to fetch job IDs.");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchJobIds();
  }, []);

  // Fetch job
  useEffect(() => {
    if (jobIds.length === 0) return;

    async function fetchJobs() {
      setIsLoading(true);
      try {
        const jobsToFetch = jobIds.slice(0, visibleJobs);
        const jobDetails = await Promise.all(
          jobsToFetch.map(async (id) => {
            const response = await fetch(
              `https://hacker-news.firebaseio.com/v0/item/${id}.json`
            );
            return response.json();
          })
        );
        setJobs(jobDetails.filter((job) => job !== null)); // Filter null values
      } catch (err) {
        setError("Failed to fetch job details.");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchJobs();
  }, [jobIds, visibleJobs]);

  const handleLoadMore = () => {
    setVisibleJobs((prev) => prev + 6);
  };

  return (
    <div className="job-board">
      <h1>Job Board</h1>
      {isLoading && <Loading />}
      {error && <p className="error">{error}</p>}

      <ul>
        {jobs.map((job) => (
          <JobItem key={job.id} job={job} />
        ))}
      </ul>

      {visibleJobs < jobIds.length && (
        <button onClick={handleLoadMore} disabled={isLoading}>
          {isLoading ? "Loading..." : "Load more"}
        </button>
      )}
    </div>
  );
}

function Loading() {
  return <p className="loading">Loading...</p>;
}

function JobItem({ job }) {
  return (
    <li className="job-item">
      <h2>{job.title}</h2>
      <p>{job.text || "No description available."}</p>
      <a href={job.url}>Apply here</a>
    </li>
  );
}

export default JobBoard;
