-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 22, 2022 at 08:21 PM
-- Server version: 10.4.20-MariaDB
-- PHP Version: 8.0.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `laravel`
--

-- --------------------------------------------------------

--
-- Table structure for table `courses`
--

CREATE TABLE `courses` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `student_id` int(10) UNSIGNED NOT NULL,
  `course_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `courses`
--

INSERT INTO `courses` (`id`, `student_id`, `course_name`, `created_at`, `updated_at`) VALUES
(1, 1, 'dotnet', '2022-04-22 06:03:26', '2022-04-22 11:25:48');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(19, '2014_10_12_000000_create_users_table', 1),
(20, '2014_10_12_100000_create_password_resets_table', 1),
(21, '2019_08_19_000000_create_failed_jobs_table', 1),
(22, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(23, '2022_04_21_055450_create_students_table', 1),
(24, '2022_04_21_060147_create_courses_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mobile` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `college` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`id`, `name`, `mobile`, `email`, `address`, `college`, `created_at`, `updated_at`) VALUES
(1, 'hjkhihjk', '6767897890', 'jkhjkh@jkhjhj.com', 'hkjhkj', 'kjhjkjk', '2022-04-22 06:03:26', '2022-04-22 11:25:48');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'khkjhk', 'jkjklj@gmail.com', NULL, '$2y$10$Ba/zgMRSlXlYfXLdK6TtKutoq/PUXo7im.dn0xFOelP0BluP6Nv8K', NULL, '2022-04-22 01:08:48', '2022-04-22 01:08:48'),
(2, 'hjh', 'khjk@gmail.com', NULL, '$2y$10$MHPr7JU01HbU93TPDKUO1Ot43Qu/1q.IITfOPp/pDUudvfASobMhS', NULL, '2022-04-22 01:12:49', '2022-04-22 01:12:49'),
(3, 'jkljkl', 'jkljkl@gmail.com', NULL, '$2y$10$XJLIWMRka5gASvy8QCZv7ODxo9UssuLQqvDuXsQVRaMg2ONXLtS5G', NULL, '2022-04-22 01:23:34', '2022-04-22 01:23:34'),
(4, 'ljlkjlklk', 'jkljkl@dfdsf.com', NULL, '$2y$10$s2lIvtO0.Ev7nNtg4vnKM.tnwqjjDgTMB6OVvx.qN3CSZQubkmFS6', NULL, '2022-04-22 01:38:54', '2022-04-22 01:38:54'),
(5, 'jjkl', 'jkjlk@gmail.com', NULL, '$2y$10$uhkJPlfxYA38NrOr01PxLudB9mhSRcp8nqJv7FMNrgs.D6tNauX1i', NULL, '2022-04-22 01:58:10', '2022-04-22 01:58:10'),
(6, 'jjklj', 'jklkjkjl@ljhkjl.com', NULL, '$2y$10$l/1HkuAmf51/CwiUWIQjn.4/F4QsxWGy4QkJCtSkedsi6Vc7qM3Ty', NULL, '2022-04-22 02:01:22', '2022-04-22 02:01:22'),
(7, 'ljljkl', 'hkkj@gmail.com', NULL, '$2y$10$8UK3zirAJ/tObvzKgBE/zujopSvbIAKyLlV58R84lQwEk.BpK/uQG', NULL, '2022-04-22 04:00:33', '2022-04-22 04:00:33'),
(8, 'khj', 'jkhjk@kjhjk.com', NULL, '$2y$10$p9T5op/9Mhiq3V.mrkW6xentU4XQAb/DDuO3uZb9RxHSIiGdcpshS', NULL, '2022-04-22 05:44:26', '2022-04-22 05:44:26'),
(9, 'klkjkj', 'jkljkl@Jlkjkl.com', NULL, '$2y$10$Kog3FoscB5G9/cuuEOLzkuoYIacTAubLgeeZzVuFR6XC1xqBzyn7m', NULL, '2022-04-22 05:45:13', '2022-04-22 05:45:13'),
(10, 'jjkl', 'asdfg@gmail.com', NULL, '$2y$10$0mSJG6wr/Agfs9WBWjHjMOQsUybgx7BYgflaF962.FsuWkFrlQEmK', NULL, '2022-04-22 05:46:00', '2022-04-22 05:46:00'),
(11, 'lkjkl', 'jjlkjkl@jlkj.com', NULL, '$2y$10$PqiXk0MY5QnUlxVHE8ywSu8IkOd0gb0ogplJR3SmNB9S/8igCfEp2', NULL, '2022-04-22 05:59:43', '2022-04-22 05:59:43'),
(12, 'gghgjh', 'ahjkhjkh@gmail.com', NULL, '$2y$10$s2ypz/mtP4rtLl8ITssDB.sVP0GBIp8ArC/.5RcGfKOU.TQD5evim', NULL, '2022-04-22 06:23:34', '2022-04-22 06:23:34'),
(13, 'jljlkj', 'asdf@gmail.com', NULL, '$2y$10$nqhJwPB8xYm7IuoadyhMVu.V3jHj7pLI7drD/YoRutI8aT73bXjLa', NULL, '2022-04-22 11:17:44', '2022-04-22 11:17:44'),
(14, 'jhkjh', 'qwert@gmail.com', NULL, '$2y$10$Nvz2Q1yBPVaKuVx9dmhW8OeRqDmweTWPx50Tntf9OxokkgbtBFBi2', NULL, '2022-04-22 11:36:31', '2022-04-22 11:36:31');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`id`),
  ADD KEY `courses_student_id_foreign` (`student_id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `courses`
--
ALTER TABLE `courses`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `students`
--
ALTER TABLE `students`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `courses`
--
ALTER TABLE `courses`
  ADD CONSTRAINT `courses_student_id_foreign` FOREIGN KEY (`student_id`) REFERENCES `students` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
